'use client';

import React, { useEffect, useRef, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (inputText: string) => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString() + '-user',
            text: inputText,
            sender: 'user',
        };
        setMessages((prevMessages: Message[]) => [...prevMessages, userMessage]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputText }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const data = await response.json();
            const aiResponse: Message = {
                id: Date.now().toString() + '-ai',
                text: data.response || 'Error retrieving response', // Use response from API
                sender: 'ai',
            };
            setMessages((prevMessages: Message[]) => [...prevMessages, aiResponse]);
        } catch (error) {
            console.error("Failed to send message:", error);
            const errorResponse: Message = {
                id: Date.now().toString() + '-error',
                text: 'Sorry, something went wrong. Please try again.',
                sender: 'ai',
            };
            setMessages((prevMessages: Message[]) => [...prevMessages, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-xl font-semibold">AI Assistant</h1>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg: Message) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}
                {isLoading && (
                    <ChatMessage message={{ id: 'loading', text: 'Thinking...', sender: 'ai' }} />
                )}
                <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
            </footer>
        </div>
    );
};

export default ChatInterface; 