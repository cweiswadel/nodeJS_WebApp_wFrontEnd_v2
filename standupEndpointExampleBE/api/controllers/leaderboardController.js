var mongoose = require("mongoose"),
    Entry = mongoose.model("Entry");

exports.read_entries = async (req, res) => {
    try {
        console.log('read_entries-try');
        var ret = await Entry.find();
        // console.log(ret);
        var errorObj = {}, errorList = [];

        //sort query param
        const sortOpt = {
            sortDESC: ['true', 'DESC'],
            sortASC: 'ASC'
        }
        if (req.query.sort != undefined) {
            if (req.query.sort === 'true' || req.query.sort === 'DESC') {
                console.log(`sort=true / sort=DESC query param`);
                ret = ret.sort((a, b) => b.score - a.score);
            } else if (req.query.sort === 'ASC') {
                console.log(`sort=ASC query param`);
                ret = ret.sort((a, b) => a.score - b.score);
            } else {
                console.log('Invalid sort query param');
                errorList.push(`Bad request on "sort", options are: ${Object.values(sortOpt)}`);
            }
        }


        const registeredOpt = {
            regYes: "yes",
            regNo: "no"
        };
        if (req.query.registered != undefined) {
            if (req.query.registered === registeredOpt.regYes) {
                console.log(`registered = ${registeredOpt.regYes} query param`);
                ret = ret.filter(a => a.registered === 'yes');
            } else if (req.query.registered === registeredOpt.regNo) {
                console.log(`registered = ${registeredOpt.regNo} query param`);
                ret = ret.filter(a => a.registered === 'no');
            } else {
                console.log('Invalid registered query param');
                errorList.push(`Bad request on "registered", options are: ${Object.values(registeredOpt)}`);
            }
        }

        if(errorList.length != 0){
            errorObj.errors = errorList;
            ret.push(errorObj);
        }


        res.json(ret);

    } catch (error) {
        console.log('read_entries-error');
        console.log(error);
        res.send({ message: "Bad request: " + error });
    }
};

exports.create_entry = async (req, res) => {
    try {
        console.log('create_entry');
        const new_entry = new Entry(req.body);
        ret = await new_entry.save();
        res.json(ret);
    } catch (error) {
        res.send({ message: "Bad request: " + error });
    }
};

exports.read_entry = async (req, res) => {
    try {
        console.log('read_entry');
        const ret = await Entry.findById(req.params.entryId);
        res.send(ret);
    } catch (error) {
        res.send({ message: "Bad request: " + error });
    }
};

exports.update_entry = async (req, res) => {
    try {
        console.log('update_entry');
        const ret = await Entry.findByIdAndUpdate(
            { _id: req.params.entryId },
            req.body,
            { new: true }
        );
        res.json(ret);
    } catch (error) {
        res.send({ message: "Bad request: " + error });
    }
};

exports.delete_entry = async (req, res) => {
    try {
        console.log('delete_entry');
        const ret = await Entry.deleteOne({ _id: req.params.entryId });
        res.json({ message: "Deleted entry" });
    } catch (error) {
        res.send({ message: "Bad Request: " + error });
    }
};