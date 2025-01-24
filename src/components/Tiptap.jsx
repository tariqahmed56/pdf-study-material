'use client'
import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Blockquote from '@tiptap/extension-blockquote';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Toolbar from './Toolbar';
import { supabase } from '@/app/lib/supabaseClient';

const Tiptap = ({content , setContent}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "editor-content w-full border-gray-500 outline-none px-3 py-2 border min-h-1/2 rounded"
      }
    },
    extensions: [
      StarterKit,
     Heading,
     ListItem,
     OrderedList,
     BulletList,
     Blockquote,
     Link,
     Image
    ],
    content: localStorage.getItem('content') || content,
     placeholder: "Start typing...",
     onUpdate: ({ editor }) =>{
      setContent(editor.getHTML());
       localStorage.setItem('content', editor.getHTML());
     }
  });

  return (
    <div>
      <Toolbar editor={editor}/>
      <EditorContent editor={editor} />
      
    </div>
  );
};

export default Tiptap;
