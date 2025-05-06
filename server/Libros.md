```mermaid
erDiagram
LIBRO ||--o{ PRESTAMOS : estar
SOCIO ||--|{ PRESTAMOS : tiene
    LIBRO {
        int id_libro PK
        string titulo
        string autor
        datetime año_publicacion
        datetime created_at
        datetime updated_at
    }
    SOCIO {
        int id_socio PK
        string nombre
        datetime fecha_registro
        int book_id FK
        boolean is_active
        datetime created_at
        datetime updated_at
    }
    PRESTAMOS {
        int id PK
        datetime fecha_prestamo
        datetime fecha_Devolucion
        datetime created_at
        datetime updated_at
    }
```

Enviar un mensaje a Ruben Garrido Piquer
