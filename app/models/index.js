const Groupe = require('./group');
const Member = require('./member');

Groupe.hasMany(Member, {
  as: "members",
  foreignKey: "groupe_id"
});

Member.belongsTo(Groupe, {
  as: "groupe",
  foreignKey: "groupe_id"
});

module.exports = {Groupe, Member};