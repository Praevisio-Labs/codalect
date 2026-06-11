import type { ModuleMetadata } from '@/types/index'

export const ragChatbot: ModuleMetadata = {
    id: 'rag-chatbot',
    name: 'RAG Chatbot',
    description:
        'Build a retrieval-augmented assistant that indexes documents, searches context, and grounds generated answers.',
    overview: `## Overview

You'll build a retrieval-augmented generation (RAG) pipeline: a Python script that ingests a set of text documents, embeds them into a Pinecone vector index, and a chatbot that retrieves the most relevant chunks before answering each question. The result is an assistant that can answer questions about your documents accurately — without hallucinating facts that aren't in the source material.

RAG is the most important pattern in applied AI right now. It's how you give a language model access to private knowledge (company docs, codebases, research papers) without fine-tuning, and it's how you ground answers in verifiable sources. Understanding how to build it from scratch — rather than using a pre-packaged solution — is what lets you debug it when retrieval quality is poor and tune it when answers are off.

This project is specifically well-suited to learning because the pipeline has clear, separable stages: ingest, embed, store, retrieve, generate. Each stage has a distinct failure mode, and building them yourself means you understand what can go wrong at each step. That understanding is what separates someone who can use a RAG library from someone who can build and maintain a production RAG system.`,
    instructions: `## Your Exercise

The starter files give you the project structure and the scaffolding for each pipeline stage. The core logic is left for you to implement.

**\`ingest.py\`** is the indexing script — run it once to load documents into Pinecone. You'll need to:
1. Implement \`load_documents(directory)\` to read all \`.txt\` files from a directory and return a list of \`Document\` objects (each with \`id\`, \`text\`, and \`source\` fields).
2. Implement \`chunk_document(doc, chunk_size, overlap)\` to split a document's text into overlapping chunks. Each chunk should be its own \`Document\` with a unique ID.
3. Implement \`embed_and_upsert(chunks, index)\` to embed each chunk with OpenAI's \`text-embedding-3-small\` model and upsert the vectors into Pinecone. Store the original text and source filename in the metadata.

**\`retrieve.py\`** handles the search step. You'll need to:
1. Implement \`retrieve(query, index, k)\` to embed the query and call \`index.query()\` to find the \`k\` most similar chunks. Return the metadata from each match.

**\`chatbot.py\`** is the main conversation loop. The message history and input loop are in place. You'll need to:
1. Implement \`build_prompt(query, context_chunks)\` to format the retrieved chunks into a context block and inject it into the system prompt.
2. Wire the retrieve → build_prompt → OpenAI call sequence in the main loop.

Build in this order: \`ingest.py\` first (run it and verify vectors appear in Pinecone), then \`retrieve.py\` (test it with a few queries), then \`chatbot.py\`.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a complete RAG pipeline from scratch — document loading, chunking, embedding, vector storage, retrieval, and grounded generation — without relying on a framework to hide the steps.
- **Understand** why chunking strategy and overlap matter for retrieval quality, and what happens when chunks are too large or too small.
- **Recognize** the failure modes of RAG — retrieval misses, context window overflow, hallucination despite good retrieval — and know which part of the pipeline to inspect when answers are wrong.`,
    skills: ['python', 'pinecone'],
    domains: ['ai', 'rag', 'agents'],
    level: 'Intermediate',
    duration: '12 hrs',
    isReleased: false,
    template: 'static',
    activeFile: '/ingest.py',
    visibleFiles: [
        '/README.md',
        '/docs/sample.txt',
        '/ingest.py',
        '/retrieve.py',
        '/chatbot.py',
        '/requirements.txt',
    ],
}
