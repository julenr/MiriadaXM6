/**
 * Created by jr1500 on 3/08/15.
 */


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {
            pregunta: DataTypes.STRING,
            respuesta: DataTypes.STRING
        }
    );
}