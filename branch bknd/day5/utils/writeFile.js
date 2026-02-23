import fs from "fs/promises";
export const writeFile = async (Path, data) => {
    try {
    const jsonData = JSON.stringify(data);
    await fs.writeFile(Path, jsonData, "utf-8");
    console.log("Data has been written to the file successfully.");
    status = 200;
  } catch (error) {
    console.error("Error writing to the file:", error);
    status = 500;
  }
};