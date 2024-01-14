const express = require('express');
const cors = require('cors');

const sequelize = require("./db");
const { Doctor, DoctorCategory, Schedule, User } = require('./models/models');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/doctors', async (req, res) => {
    try {
      const doctors = await Doctor.findAll({
        include: {
          model: DoctorCategory,
          as: 'DoctorCategory',
        },
      });
      res.json(doctors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.get('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const doctor = await Doctor.findByPk(id);
      if (doctor) {
        res.json(doctor);
      } else {
        res.status(404).json({ error: 'Doctor not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.post('/doctors', async (req, res) => {
    const { name, contact, experience } = req.body;
    try {
      const doctor = await Doctor.create({ name, contact, experience });
      res.status(201).json(doctor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.put('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    const { name, contact, experience } = req.body;
    try {
      const doctor = await Doctor.findByPk(id);
      if (doctor) {
        await doctor.update({ name, contact, experience });
        res.json(doctor);
      } else {
        res.status(404).json({ error: 'Doctor not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
//   app.delete('/doctors/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//       const doctor = await Doctor.findByPk(id);
//       if (doctor) {
//         await doctor.destroy();
//         res.sendStatus(204);
//       } else {
//         res.status(404).json({ error: 'Doctor not found' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });

app.get('/doctor-categories', async (req, res) => {
    try {
      const doctorCategories = await DoctorCategory.findAll({
        include: [
          {
            model: Doctor,
          },
          {
            model: Schedule,
          },
        ],
      });
  
      res.json(doctorCategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.get('/doctor-categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const doctorCategory = await DoctorCategory.findByPk(id);
      if (doctorCategory) {
        res.json(doctorCategory);
      } else {
        res.status(404).json({ error: 'Doctor category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.post('/doctor-categories', async (req, res) => {
    const { name } = req.body;
    try {
      const doctorCategory = await DoctorCategory.create({ name });
      res.status(201).json(doctorCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.put('/doctor-categories/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const doctorCategory = await DoctorCategory.findByPk(id);
      if (doctorCategory) {
        await doctorCategory.update({ name });
        res.json(doctorCategory);
      } else {
        res.status(404).json({ error: 'Doctor category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.delete('/doctor-categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const doctorCategory = await DoctorCategory.findByPk(id);
      if (doctorCategory) {
        await doctorCategory.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Doctor category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/schedules', async (req, res) => {
    try {
      const schedules = await Schedule.findAll({
        include: [
          {
            model: DoctorCategory,
            as: 'DoctorCategory',
            include: {
              model: Doctor,
              as: 'Doctors',
            },
          },
        ],
      });
  
      res.json(schedules);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.get('/schedules/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const schedule = await Schedule.findByPk(id);
      if (schedule) {
        res.json(schedule);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.post('/schedules', async (req, res) => {
    const { Room, DoctorCategory_id, Date, Status } = req.body;
    try {
      const schedule = await Schedule.create({ Room, DoctorCategory_id, Date, Status });
      res.status(201).json(schedule);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.put('/schedules/:id', async (req, res) => {
    const { id } = req.params;
    const { Room, DoctorCategory_id, Date, Status } = req.body;
    try {
      const schedule = await Schedule.findByPk(id);
      if (schedule) {
        await schedule.update({ Room, DoctorCategory_id, Date, Status });
        res.json(schedule);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.delete('/schedules/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const schedule = await Schedule.findByPk(id);
      if (schedule) {
        await schedule.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Schedule not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
start()