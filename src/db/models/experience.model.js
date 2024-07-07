const {Model, DataTypes} = require('sequelize');

const EXPERIENCE_TABLE = 'experiences';


class Experience extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EXPERIENCE_TABLE,
            modelName: 'Experience',
            timestamps: false
        }
    }
}

const ExperienceSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    Position:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'position'
    },
    skills:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'skills'
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'start_date'
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'end_date'
    },
}

module.exports =  {Experience, ExperienceSchema} ;