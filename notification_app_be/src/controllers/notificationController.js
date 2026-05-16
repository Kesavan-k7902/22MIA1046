const getNotifications = (req, res) => {
  res.json({
    message: "Notifications fetched successfully"
  });
};

module.exports = {
  getNotifications
};