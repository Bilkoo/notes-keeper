"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var Schema = _mongoose2["default"].Schema;

var NoteSchema = new Schema({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String },
    createdAt: { type: Date }
});

var Note = _mongoose2["default"].model("Note", NoteSchema);
//# sourceMappingURL=note.js.map