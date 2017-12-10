"use strict";

var ServiceFactory = require("./../src/ServiceFactory");
var File = require("./../src/File");
var FileHandlerProxy = require("./../src/FileHandlerProxy");

var assert = require("assert");


describe('FactoryTest', function () {

    let servicefactory;
    let filehandler;

    before(function () {
        servicefactory = new ServiceFactory();
        filehandler = servicefactory.createFileHandler();
    });

    describe('#FactoryCreateTest', function () {
        it('default factory should be an instance of ServiceFactory', function () {
            assert.deepEqual(new ServiceFactory(), servicefactory);
        });
    });

    describe('#FileHandlerCreateTest', function () {
        it('filehandler should be an instance of FilehandlerProxy', function () {
            assert.notDeepEqual(new FileHandlerProxy(), filehandler);
        });
    });
});


describe('FileTest', function () {
    describe('#fileNameTest', function () {
        it('file should have values File', function () {
            let file = new File(1, "testfile1");
            assert.equal(1, file._id);
            assert.equal("testfile1", file.filename);
        });
    });
});


describe('FileHandlerInsertTest', function () {

    var filehandler;
    var file1;

    before(function () {
        filehandler = new ServiceFactory().createFileHandler();
        file1 = new File(1, "testfile1");
        filehandler.insertFile(file1);
    });

    after(function () {
        filehandler.deleteAll();
    });


    describe('#insertFileTest', function () {
        it('filehandler should insert specific file in database', function (done) {
            filehandler.insertFile(file1);
            setTimeout(function () {
                filehandler.findFilebyFilename(file1, function (data) {
                    assert.deepEqual(file1, data);
                    done();
                });
            }, 100);
        });
    });
});



describe('FileHandlerDeleteTest', function () {

    var filehandler;
    var file1;
    var file2;

    before(function () {
        filehandler = new ServiceFactory().createFileHandler();
        file1 = new File(1, "testfile1");
        file2 = new File(2, "testfile2");
        filehandler.insertFile(file1);
        filehandler.insertFile(file2);
    });

    after(function () {
        filehandler.deleteAll();
    });

    describe('deleteFile', function () {
        it('filehandler should delete specific file in database', function (done) {
            filehandler.deleteFile(file1);
            setTimeout(function () {
                filehandler.findFilebyFilename(file1, function (data) {
                    assert.equal(null, data);
                    done();
                });
            }, 100);
        });
    });


    describe('#deleteAll', function () {
        it('filehandler should delete all files in database', function (done) {
            filehandler.deleteAll({});
            setTimeout(function () {
                filehandler.findFilebyFilename(function (data) {
                    assert.equal(null, data);
                    done();
                });
            }, 100);
        });
    });

});


describe('FileHandlerFind', function () {

    var filehandler;
    var file1;
    var file2;

    before(function () {
        filehandler = new ServiceFactory().createFileHandler();
        file1 = new File(1, "testfile1");
        file2 = new File(2, "testfile2");
        filehandler.insertFile(file1);
        filehandler.insertFile(file2);
    });

    after(function () {
        filehandler.deleteAll();
    });

    describe('#findFilebyFilename', function () {
        it('filehandler should find file in database by filename', function () {
            setTimeout(function (done) {
                filehandler.findFilebyFilename(file1, function (data) {
                    assert.deepEqual(file1, data);
                    done();
                });
            }, 100);
        });
    });

    describe('#findAll', function () {
        it('filehandler should find all files in database', function () {
            setTimeout(function (done) {
                filehandler.findAll(function (data) {
                    assert.equal(2, data.length);
                    assert.deepEqual(file1, data[0]);
                    assert.deepEqual(file2, data[1]);
                    done();
                });
            }, 100);
        });
    });

});


describe('FileHandlerUnsupportedTest', function () {

    let filehandler;

    before(function () {
        filehandler = new ServiceFactory().createFileHandler();
    });

    describe('#updateFile', function () {
        it('unsupported operation', function () {
            let file5 = new File("testfile5");
            assert.equal("Unsupported Operation", filehandler.updateFile(file5));
        });
    });

});