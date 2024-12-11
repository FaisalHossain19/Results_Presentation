FROM python:3.12-slim

WORKDIR /app

# Install required dependencies for psycopg2
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY . /app

RUN pip install hatch uv

ENV PATH="/app/.venv/bin:$PATH"

RUN uv venv

RUN hatch run uv sync

EXPOSE 8000

CMD ["hatch", "run", "start"]
