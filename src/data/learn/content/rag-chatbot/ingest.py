"""
ingest.py — Load documents, chunk them, embed them, and store in Pinecone.
Run this script once (or whenever your documents change) to build the index.
"""

import os
from pathlib import Path
from dataclasses import dataclass, field
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec
import openai

load_dotenv()

PINECONE_INDEX = "rag-chatbot"
EMBED_MODEL = "text-embedding-3-small"
EMBED_DIM = 1536


@dataclass
class Document:
    id: str
    text: str
    source: str
    metadata: dict = field(default_factory=dict)


def load_documents(directory: str) -> list[Document]:
    """
    Read all .txt files in the given directory.
    Return a list of Document objects, one per file.
    Each document's id should be the filename (without extension).
    """
    # TODO: Use pathlib.Path to iterate over .txt files in the directory.
    # For each file, read its text content and create a Document.
    # Return the list.
    raise NotImplementedError


def chunk_document(
    doc: Document, chunk_size: int = 800, overlap: int = 150
) -> list[Document]:
    """
    Split doc.text into overlapping chunks of approximately chunk_size characters.
    Each chunk becomes its own Document with id="{doc.id}-chunk-{i}".
    The overlap ensures that sentences split across chunk boundaries are still
    represented in at least one complete chunk.
    """
    # TODO: Implement a sliding window chunker.
    # Start at position 0, take chunk_size characters, then advance by (chunk_size - overlap).
    # Continue until you've covered the full text.
    # Each chunk Document should have source=doc.source and metadata={'source': doc.source}.
    raise NotImplementedError


def embed_and_upsert(chunks: list[Document], index) -> None:
    """
    Embed each chunk and upsert into Pinecone in batches of 100.
    Store the chunk text and source in the vector metadata so we can
    retrieve the original text after a similarity search.
    """
    client = openai.OpenAI()

    # TODO: For each chunk, call client.embeddings.create() to get the vector.
    # Build a Pinecone vector dict: { 'id': chunk.id, 'values': vector, 'metadata': {...} }
    # Include 'text' and 'source' in the metadata.
    # Upsert in batches of 100 using index.upsert(vectors=batch).
    raise NotImplementedError


def get_or_create_index(pc: Pinecone):
    """Get the Pinecone index, creating it if it doesn't exist."""
    existing = [idx.name for idx in pc.list_indexes()]
    if PINECONE_INDEX not in existing:
        print(f"Creating index '{PINECONE_INDEX}'...")
        pc.create_index(
            name=PINECONE_INDEX,
            dimension=EMBED_DIM,
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1"),
        )
    return pc.Index(PINECONE_INDEX)


if __name__ == "__main__":
    pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
    index = get_or_create_index(pc)

    docs_dir = "./docs"
    print(f"Loading documents from {docs_dir}...")
    documents = load_documents(docs_dir)
    print(f"Loaded {len(documents)} documents")

    all_chunks: list[Document] = []
    for doc in documents:
        chunks = chunk_document(doc)
        all_chunks.extend(chunks)
    print(f"Created {len(all_chunks)} chunks")

    print("Embedding and upserting to Pinecone...")
    embed_and_upsert(all_chunks, index)
    print("Done. Index is ready.")
