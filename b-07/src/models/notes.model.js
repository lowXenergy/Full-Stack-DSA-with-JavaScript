// It describes how documents in the database should look and provides a programmatic interface to interact with them.

const mongoose = require("mongoose");
// This loads the Mongoose library into your file.
// Mongoose is an ODM (Object Data Modeling) tool that sits between:
// Object Data Modeling is a data model that organizes information as objects, combining both attributes (data) and methods (behavior) into single units, closely mirroring real-world entities and object-oriented programming principles.
// MongoDB stores all data records as BSON (Binary JSON) documents, which are binary-encoded serializations of JSON-like documents designed for efficient storage and fast traversal.  Unlike JSON, which is a human-readable string format, BSON includes type and length information, supports ordered field-value pairs, and extends the model with additional data types like Date, ObjectId, and binary data
// Node.js (JavaScript objects)
// MongoDB (BSON documents)
// It allows you to define structure, validation, and behavior for database documents.

const noteSchema = new mongoose.Schema({
// A schema defines:
// the structure of documents
// the type of each field
// optional validation rules. In database terms, it is similar to a table structure in SQL, but MongoDB itself is schema-less — Mongoose enforces structure at the application level.
    title:String,
    description:String,
})

// A model is a constructor compiled from a schema.
// It represents a collection in MongoDB and provides methods to:
// create documents
// read documents
// update documents
// delete documents
const noteModel = mongoose.model("notes",noteSchema)


module.exports=noteModel

// Schema  → defines structure
// Model   → provides database functions
// Collection → actual data in MongoDB