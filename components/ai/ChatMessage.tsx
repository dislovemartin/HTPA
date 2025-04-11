import React from 'react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    const bubbleClasses = isUser
        ? 'bg-blue-500 text-white self-end'
        : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100 self-start';
    const alignmentClass = isUser ? 'items-end' : 'items-start';

    return (
        <div className={`flex flex-col w-full max-w-md mx-auto ${alignmentClass}`}>
            <div
                className={`rounded-lg px-4 py-2 shadow-md break-words ${bubbleClasses}`}
            >
                <p className="text-sm">{message.text}</p>
            </div>
            <span className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
                {isUser ? 'You' : 'AI'}
            </span>
        </div>
    );
};

export default ChatMessage; 