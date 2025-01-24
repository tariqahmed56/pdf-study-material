"use client"
import React from 'react';
import { Bold, Italic, Strikethrough, Code, Paragraph, ListOrdered, Quote, Heading1, Heading2, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import { FaParagraph } from 'react-icons/fa';

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const handleButtonClick = (action, options = {}) => (event) => {
    event.preventDefault();
    editor.chain().focus()[action](options).run();
  };

  const addLink = (event) => {
    event.preventDefault();
    const url = prompt('Enter the URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = (event) => {
    event.preventDefault();
    const url = prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="toolbar flex fla-wrap space-x-2 my-2 py-3 bg-blue-100 p-4 rounded-lg shadow-md">
      <button
        onClick={handleButtonClick('toggleBold')}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleItalic')}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Italic className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleStrike')}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-2 rounded ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Strikethrough className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleCode')}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-2 rounded ${editor.isActive('code') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Code className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('setParagraph')}
        disabled={!editor.can().chain().focus().setParagraph().run()}
        className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <FaParagraph className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleHeading', { level: 1 })}
        disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Heading1 className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleHeading', { level: 2 })}
        disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Heading2 className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleOrderedList')}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <ListOrdered className="w-5 h-5" />
      </button>
      <button
        onClick={handleButtonClick('toggleBlockquote')}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
      >
        <Quote className="w-5 h-5" />
      </button>
      <button
        onClick={addLink}
        className="p-2 rounded bg-blue-200 text-blue-700"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
      <button
        onClick={addImage}
        className="p-2 rounded bg-blue-200 text-blue-700"
      >
        <ImageIcon className="w-5 h-5" />
      </button>
    
    </div>
  );
};

export default Toolbar;