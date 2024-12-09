import "server-only"
import fs from "fs/promises";

const videos = ()=>import("../data/videos.json").then(module => module.default)

const deleteVideo = async (id) => {
  try {
    const allVideos = await videos();
    const videoIndex = allVideos.findIndex((video) => video.videoId === id);
    if (videoIndex === -1) {
      throw new Error(`Video not found.`);
    }
    const updatedVideos = allVideos.filter((video) => video.videoId !== id)
    const filePath = "./data/videos.json"; 
    try {
      await fs.writeFile(filePath, JSON.stringify(updatedVideos, null, 2), "utf-8");
    } catch (error) {
      throw new Error("Error deleting video...");
    }

  } catch (error) {
    console.error("Error deleting video:", error.message);
    throw error;
  }
};

const editVideo = async (id, payload) => {
  try {
    const allVideos = await videos();
    const videoIndex = allVideos.findIndex((video) => video.videoId === id);
    if (videoIndex === -1) {
      throw new Error(`Video with ID ${id} not found.`);
    }
    allVideos[videoIndex] = { ...allVideos[videoIndex], ...payload };
    const filePath = "./data/videos.json";
    try {
      await fs.writeFile(filePath, JSON.stringify(allVideos, null, 2), "utf-8");
      return allVideos[videoIndex]
    } catch (error) {
      throw new Error(`Video Edit ID ${id} is Failed.`);
    }
  } catch (error) {
    throw new Error(`Unknown Error Happen.`);
  }
}

const  getVideoById = async (id) => {
  const allVideos = await videos()
  const videoIndex = allVideos.findIndex((video) => video.videoId === id);
    if (videoIndex === -1) {
      throw new Error(`Video not found.`);
    }
  return allVideos[videoIndex]
}

const getAllVideos = () => {
  return videos()
}


export {
  getAllVideos,
  getVideoById,
  editVideo,
  deleteVideo
}