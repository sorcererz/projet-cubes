const jwt = require('jsonwebtoken');



class Guard {

  // Vérifie que l'utilisateur en cours est bien connecté
  static authGard = (req, res, next) => {
    console.log('authGard');
    try {
      console.log('in authGard', req.params.userId, req.headers.authorization);
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userId = decodedToken.user_id;
      console.log('req', req.params );
      if (req.params.userId && req.params.userId != userId) {
        console.log('authGard', 'err 1' , req.params.userId);
        res.status(401).json({
          error: 'Invalid user ID'
        });
      } else {
        next();
      }
    } catch {
      console.log('authGard', 'err 2' );
      res.status(401).json({
        error:'Invalid request!'
      });
    }
  };

  // Vérifie le role de l'utilisateur pour super admin
  static superAdminhGard = (req, res, next) => {
    console.log('superAdminhGard');
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userRole = decodedToken.role;
      const idRole = 4 // id super admin

      if (idRole >= userRole) {
        res.status(401).json({
          error: "Vous n'avez pas les droits nécéssaires pour faire cette action"
        });
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: 'Invalid request!'
      });
    }
  };

  // Vérifie le role de l'utilisateur admin
  static adminGard = (req, res, next) => {
    console.log('adminguard');
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userRole = decodedToken.role;
      const idRole = 3;  // id admin

      if (idRole >= userRole) {
        res.status(401).json({
          error: "Vous n'avez pas les droits nécéssaires pour faire cette action"
        });
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };

  // Vérifie le role de l'utilisateur modéraateur
  static moderateurGard = (req, res, next) => {
    console.log('moderateurGard');
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userRole = decodedToken.role;
      const idRole = 2;  // id modéraateur

      if (idRole >= userRole) {
        console.log('err 1');
        res.status(401).json({
          error: "Vous n'avez pas les droits nécéssaires pour faire cette action"
        });
      } else {
        next();
      }
    } catch {
      console.log('err 2');
      res.status(401).json({
        error: 'Invalid request!'
      });
    }
  };
}


module.exports = Guard