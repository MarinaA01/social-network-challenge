const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all courses
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('users');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('users');

      if (!user) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a course
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'Users and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async updateUser(req, res) {
    try {
      const user = await Course.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
