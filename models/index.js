import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite://data.db", {
	logging: false
});

const sync = async () => await sequelize.sync();
sync();

export default sequelize;
