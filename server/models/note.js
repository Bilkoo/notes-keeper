"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var NoteSchema = new Schema({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String },
    createdAt: { type: Date }
});

_mongoose2.default.model("Note", NoteSchema);