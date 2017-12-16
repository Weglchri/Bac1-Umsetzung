"use strict";
exports.__esModule = true;
var Folder_1 = require("./../src/Folder");
var File_1 = require("./../src/File");
var FileHandler_1 = require("./../src/FileHandler");
//call node.js assert tool
var assert = require("assert");
describe('ConstructorTest', function () {
    describe('#FolderTest', function () {
        it('folder instatiation test', function () {
            var folder = new Folder_1.Folder("root");
            assert.deepEqual(new Folder_1.Folder("root"), folder);
        });
    });
    describe('#FileTest', function () {
        it('file instatiation test', function () {
            var file = new File_1.File("test.txt", 1024);
            assert.deepEqual(new File_1.File("test.txt", 1024), file);
        });
    });
    describe('#FileHandlerTest', function () {
        it('filehandler instatiation test', function () {
            var filehandler = new FileHandler_1.FileHandler();
            assert.deepEqual(new FileHandler_1.FileHandler(), filehandler);
        });
    });
});
describe('CompositeStructurTest', function () {
    var folder1;
    var folder2;
    var folder3;
    before(function () {
        folder1 = new Folder_1.Folder("Composite");
        folder2 = new Folder_1.Folder("src");
        folder3 = new Folder_1.Folder("test");
        var file1 = new File_1.File("Script.js", 1024);
        var file2 = new File_1.File("Test.js", 1024);
        var file3 = new File_1.File("Package.json", 512);
        folder2.addNode(file1);
        folder3.addNode(file2);
        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });
    describe('#FolderSizeTest', function () {
        it('compare size of folder', function () {
            assert.equal(2560, folder1.getSize());
        });
    });
    describe('#FolderNumberTest', function () {
        it('compare number of folders', function () {
            assert.equal(3, folder1.getNumberOfFiles());
        });
    });
});
describe('CompositeDatabaseTest', function () {
    var filehandler;
    var folder1;
    var file1;
    var file2;
    before(function () {
        filehandler = new FileHandler_1.FileHandler();
        folder1 = new Folder_1.Folder("Composite");
        var folder2 = new Folder_1.Folder("src");
        var folder3 = new Folder_1.Folder("test");
        file1 = new File_1.File("Script.js", 1024);
        file2 = new File_1.File("Test.js", 1024);
        var file3 = new File_1.File("Package.json", 512);
        folder2.addNode(file1);
        folder3.addNode(file2);
        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });
    after(function () {
        filehandler.deleteAll();
    });
});
