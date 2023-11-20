'use client';
import { useState, useEffect } from 'react';
import {
  EditorState,
  convertToRaw,
  ContentState,
  AtomicBlockUtils,
} from 'draft-js';
import dynamic from 'next/dynamic';
import draftToHtml from 'draftjs-to-html';
import 'node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useFormik } from 'formik';
import { PostInterface } from '../../store/post/interface';
import { PostValidationSchema } from '../../validations';
import { Button } from '../button';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from '../dialog/Dialog';
import { usePostMutation, useEditMutation } from '../../store/post/api';


declare type EditorStateProp = typeof import("draft-js");
declare type EditorProps = typeof import('react-draft-wysiwyg')




const htmlToDraft =
  typeof window === 'object' && require('html-to-draftjs').default;

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

interface AppEditorProps extends Partial<PostInterface> {
  action: 'editing' | 'creating';
}

export const AppEditor = (props: AppEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [createPost, { isLoading: creatingPost }] = usePostMutation();
  const [editPost, { isLoading: editingPost }] = useEditMutation();
  const router = useRouter();
  const onEditorStateChange = (editorState: EditorStateProp) => {
    setEditorState(editorState);
  };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik<PostInterface>({
    initialValues: {
      author: '',
      description: '',
      title: '',
      content: '',
    },
    validationSchema: PostValidationSchema,
    onSubmit: (values) => {
      if (props.action === 'creating') {
        createPost(values)
          .unwrap()
          .then((res) => {
            console.log(res);
            router.push('/');
          })
          .catch((e) => console.log(e));
      } else {
        editPost({
          id: props._id as string,
          body: values,
        })
          .unwrap()
          .then((res) => {
            console.log(res);
            router.push('/');
          })
          .catch((e) => console.log(e));
      }
    },
  });

  useEffect(() => {
    if (props?.content && props?.description && props?.title) {
      setFieldValue('title', props.title);
      setFieldValue('description', props.description);
      setFieldValue('content', props.content);
      setFieldValue('author', props.author);
      let currentContent = `${draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      )}`;
      currentContent = currentContent.concat(props.content);
      const contentBlock = htmlToDraft(currentContent);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
  }, [props]);

  return (
    <div className="relative">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        placeholder="Start writing your post"
        onContentStateChange={(e: any) => {
          setFieldValue(
            'content',
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          );
        }}
        editorStyle={{
          color: '#000',
          fontWeight: 300,
          marginTop: '200px',
        }}
      />
      <div className="absolute top-[5.5em]">
        <textarea
          value={values.title}
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full text-[3.5em] leading-[1em] text-black font-bold focus:border-none "
          placeholder="Enter title"
        />
        <input
          value={values.description}
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          className=""
          placeholder="Enter your subtitle"
        />
      </div>
      <Dialog>
        <DialogTrigger>
          <Button color="secondary" size="lg">
            {props.action === 'creating' ? 'Publish' : 'Edit post'}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div>
            <label>Author's name</label>
            <input
              value={values.author}
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-[50px] my-4 border border-black rounded-sm pl-2"
              placeholder="Enter name"
            />
            <Button
              loading={creatingPost || editingPost}
              onClick={() => handleSubmit()}
              size="lg"
              color="primary"
            >
              Complete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
