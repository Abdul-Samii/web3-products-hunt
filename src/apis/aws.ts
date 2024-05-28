import axios from "axios";

export const getPresignedUrl = async() => {
  const res = await axios.get('http://localhost:3000/aws/s3/presigned-url');
  return res.data;
}