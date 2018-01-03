var Node = require("./../src/Node");
var Folder = require("./../src/Folder");
var File = require("./../src/File");
var Filehandler = require("./../src/FileHandler");

//call node.js assert tool
var assert = require('assert');


describe('ConstructorTest', function () {

    describe('#FolderTest', function () {
        it('folder instatiation test', function () {
            let folder = new Folder();
            assert.deepEqual(new Folder(), folder);
        });
    });

    describe('#FileTest', function () {
        it('file instatiation test', function () {
            let file = new File();
            assert.deepEqual(new File, file);
        });
    });

    describe('#FileHandlerTest', function () {
        it('filehandler instatiation test', function () {
            let filehandler = new Filehandler();
            assert.deepEqual(new Filehandler(), filehandler);
        });
    });
});


describe('CompositeStructurTest', function () {

    let folder1;

    before(function () {
        folder1 = new Folder("Composite");
        let folder2 = new Folder("src");
        let folder3 = new Folder("test");
        let file1 = new File("Script.js", 1024);
        let file2 = new File("Test.js", 1024);
        let file3 = new File("Package.json", 512);

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

    let filehandler;
    let folder1;
    let file1;
    let file2;

    before(function () {
        filehandler = new Filehandler();
        folder1 = new Folder("Composite");
        let folder2 = new Folder("src");
        let folder3 = new Folder("test");
        file1 = new File("Script.js", 1024);
        file2 = new File("Test.js", 1024);
        let file3 = new File("Package.json", 512);

        folder2.addNode(file1);
        folder3.addNode(file2);

        folder1.addNode(folder2);
        folder1.addNode(folder3);
        folder1.addNode(file3);
    });

    after(function () {
        filehandler.deleteAll();
    });

    describe('#FileHandlerTest', function () {
        it('test folder insert ', function (done) {
            filehandler.insert(file1);
            setTimeout(function () {
                filehandler.find(file1, function (data) {
                    assert.deepEqual(file1, data);
                    done();
                });
            }, 100);
        });
    });

    describe('#FileHandlerTest', function () {
        it('test folder structure', function (done) {
            filehandler.insert(folder1);
            setTimeout(function () {
                filehandler.findAll(function (data) {
                    let file = new File();
                    file.name = data[1].nodes[1].nodes[0].name;
                    file.size = data[1].nodes[1].nodes[0].size;
                    assert.deepEqual(file2, file);
                    done();
                });
            }, 100);
        });
    });
});