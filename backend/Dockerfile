FROM python:3.11-alpine

RUN adduser -D appuser

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN chown -R appuser:appuser /app
USER appuser
COPY . .

EXPOSE 5050
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5050"]