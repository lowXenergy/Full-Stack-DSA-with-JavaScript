const songModel = require("../models/song.model");
const id3 = require("node-id3")
const storageService =require("../services/storage.services")

async function uploadSong(req,res){

    const songBuffer = req.file.buffer
    
    const {mood} = req.body

    const tags=id3.read(songBuffer)

    console.log(tags);


    // const songFile = await storageService.uploadFile({
    //     buffer:songBuffer,
    //     filename:tags.title + ".mp3",
    //     folder:"/cohort-2/modify/songs"
    // })


    // const posterFile = await storageService.uploadFile({
    //     buffer:tags.image.imageBuffer,
    //     filename:tags.title + ".jpeg",
    //     folder:"/cohort-2/modify/posters"
    // })

    const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
        buffer: songBuffer,
        filename: tags.title + ".mp3",
        folder: "/cohort-2/modify/songs"
    }),

    storageService.uploadFile({
        buffer: tags.image.imageBuffer,
        filename: tags.title + ".jpeg",
        folder: "/cohort-2/modify/posters"
    })
]);


    const song = await songModel.create({
        title:tags.title,
        url:songFile.url,
        posterUrl:posterFile.url,
        mood
    })



    res.status(201).json({
        message:"Song created successfully",
        song
    })

}

async function getSong(req,res){
    const {mood} = req.query;

    const song = await songModel.findOne({
        mood
    })

    res.status(200).json({
        message:"song fetched successfully",
        song
    })

}

module.exports = {uploadSong,getSong}