// import jwt from 'jsonwebtoken';

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   });
// };

// export default generateToken;





import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is missing in environment variables');
    }
    
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  } catch (error) {
    console.error('Token generation failed:', error.message);
    throw error; // Re-throw to be caught by your controller
  }
};

export default generateToken;