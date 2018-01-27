"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnections = setUpConnections;
exports.listNotes = listNotes;
exports.createNote = createNote;
exports.deleteNote = deleteNote;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _etcConfigJson = require('../../etc/config.json');

var _etcConfigJson2 = _interopRequireDefault(_etcConfigJson);

require("../models/note");

var Note = _mongoose2["default"].model("Note");

function setUpConnections() {
    _mongoose2["default"].connect("mongodb://" + _etcConfigJson2["default"].db.host + ":" + _etcConfigJson2["default"].db.port + "/" + _etcConfigJson2["default"].db.name);
}

function listNotes() {
    return Note.find();
}

function createNote(data) {
    var note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    });

    return note.save();
    //return Note.save(note);
}

function deleteNote(id) {
    return Note.findById(id).remove();
}
//# sourceMappingURL=DataBaseUtils.js.map