import axios from 'axios';

export default async function Sector(){
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpbmFsZG9ndWlsaGVybWVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE2OTM4NDk3Njl9.cF-DJyaXhL9-G_0111WpLeieghRtQN7T44GNE1hczVI";
        
    const data = await axios.get(`http://systembrutamarketing.com.br:21160/sector`, { headers: { Authorization: token}});

    return data.data
}
