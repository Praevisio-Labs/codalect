"""
retrieve.py — Semantic search over the Pinecone index.
"""

from dotenv import load_dotenv
import openai

load_dotenv()

EMBED_MODEL = "text-embedding-3-small"


def retrieve(query: str, index, k: int = 4) -> list[dict]:
    """
    Embed the query and search the Pinecone index for the k most similar chunks.
    Returns a list of metadata dicts from the matching vectors.
    Each dict has 'text' and 'source' keys (from the metadata stored during ingest).
    """
    # TODO: Embed the query using openai.OpenAI().embeddings.create().
    # Call index.query() with the query vector, top_k=k, and include_metadata=True.
    # Extract the metadata from each match and return the list.
    raise NotImplementedError
