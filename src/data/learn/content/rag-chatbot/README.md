# RAG Chatbot

A retrieval-augmented generation chatbot that answers questions based on your documents.

## Setup

1. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

2. Set environment variables in `.env`:

    ```
    OPENAI_API_KEY=sk-...
    PINECONE_API_KEY=pcsk-...
    ```

3. Run the ingestion script to index your documents:

    ```bash
    python ingest.py
    ```

4. Start the chatbot:
    ```bash
    python chatbot.py
    ```

## How it works

- `ingest.py` loads documents from `docs/`, chunks them, embeds them with OpenAI, and stores the vectors in Pinecone.
- `retrieve.py` handles semantic search — given a query, it finds the most relevant chunks.
- `chatbot.py` ties it together: retrieves context for each question, injects it into the prompt, and streams the answer.
