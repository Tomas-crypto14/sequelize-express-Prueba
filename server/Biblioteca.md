```mermaid
erDiagram
    AUTORES ||--o{ LIBROS : places
    LIBROS ||--|{ ORDER_BOOKS : contains
    PEDIDOS ||--o{ ORDER_BOOKS : listed_in
    AUTORES {
        int id PK
        string name
        string nacionality
        string gender
        datetime created_at
        datetime updated_at
    }
    LIBROS {
        int id PK
        string title
        string description
        int length
        int author_id FK
        boolean is_active
        datetime created_at
        datetime updated_at
    }
    PEDIDOS {
        int id PK
        string date
        string user
        datetime created_at
        datetime updated_at
    }
    ORDER_BOOKS {
        int id PK
        int book_id FK
        int order_id FK
    }
```

Enviar un mensaje a Ruben Garrido Piquer
