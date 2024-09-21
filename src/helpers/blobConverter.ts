import * as FileSystem from 'expo-file-system';

export const documentBlobConverter = async(data) =>{
        const uri = await FileSystem.documentDirectory + data.name;
  
        await FileSystem.copyAsync({
          from: data.file,
          to: uri
        })
        let Blob = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' }); 

        return await {file:Blob, extension:data.extension, name:data.name}
}