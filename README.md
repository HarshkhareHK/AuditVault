#  AuditVault

Database Schema: The "Smart-Firm" Core
The backend is designed using a relational structure (PostgreSQL) to ensure data integrity between clients, their filings, and the actual files stored in the cloud.

1. Users Table (CAs & Clients)
id: UUID (Primary Key)

role: Enum (admin_ca, staff_assistant, client)

frn_number: String (Required for CAs)

pan_gstin: String (Unique identifier for clients)

mfa_enabled: Boolean (Security requirement)

2. Compliance_Projects Table
This table tracks the "Status" of a specific task (e.g., "Audit 2025").

id: UUID

client_id: UUID (Foreign Key)

category: Enum (GST, Income_Tax, Audit, MCA)

fiscal_year: String (e.g., "2025-26")

status: Enum (Pending_Docs, In_Review, Query_Raised, Filed)

deadline: Timestamp

3. Document_Vault Table
Tracks files stored in AWS S3/Google Cloud.

id: UUID

project_id: UUID (Foreign Key)

file_name: String

s3_url: String (Encrypted Link)

is_verified: Boolean (CA approval status)

uploaded_at: Timestamp

Operational Logic: The "Document-Status" Flow
To make the "Smart-Firm" efficient, the repository uses a State-Machine logic for document handling:

State: Pending_Docs

System checks the Document_Vault for required files (e.g., Bank Statement).

If missing, an automated trigger via n8n/Make.com sends a WhatsApp reminder to the client.

State: In_Review

Triggered when the client uploads all required files.

The CA receives a dashboard notification to start the work.

State: Query_Raised

If the CA finds an error, they flag a specific document.

The client receives an "Action Required" alert on their mobile dashboard.

State: Filed

Once the work is done, the CA uploads the final Acknowledgement (ACK).

The status updates to "Filed" and the client can now download their certificate
