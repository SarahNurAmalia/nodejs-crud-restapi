// controller data user

import db from "../config/db.js";

// 1. GET semua user
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// 2. INSERT user
export const insertUser = (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Data berhasil disimpan" });
    }
  );
};

// 3. GET user by id
export const showById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json(results[0]);
  });
};

// 4. UPDATE user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  db.query(
    "UPDATE users SET name=?, email=?, password=? WHERE id=?",
    [name, email, password, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.json({ message: "Data berhasil diupdate" });
    }
  );
};

// 5. DELETE user
export const deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil dihapus" });
  });
};
