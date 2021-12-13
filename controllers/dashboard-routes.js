const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("==========Dashboard==========");
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "post_contents", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // render the dashboard by passing the posts, logged in and also that this is now the dashboard
      console.log("rendering dashboard");
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("dashboard", {
        posts: posts.reverse(),
        loggedIn: true,
        isDashboard: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "post_contents", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        // block attempt to edit a post that the user didn't create
        if (dbPostData.user.username != req.session.username) {
          console.log(
            "Attempt to delete other user post by " + req.session.username
          );
          res
            .status(403)
            .json({ message: "You cannot edit posts from other users" });
          return;
        }
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
