import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import { Modal, Button, PasswordInput, Group } from '@mantine/core';

function UserProfile() {
    const [profile, setProfile] = useState({
        firstName: 'Amelia',
        lastName: 'Harper',
        department: 'UI/UX',
        position: 'Designer',
        hiredDate: '3/3/2023',
        birthDate: '5/3/1980',
        profileImage: 'https://via.placeholder.com/150', // Default image URL
    });

    const [editMode, setEditMode] = useState({
        firstName: false,
        lastName: false,
        department: false,
        position: false,
        hiredDate: false,
        birthDate: false,
    });

    const [passwordModalOpened, setPasswordModalOpened] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const [imageInputKey, setImageInputKey] = useState(Date.now()); // Key to reset file input

    const handleEdit = (field) => {
        setEditMode({ ...editMode, [field]: true });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        setEditMode({
            firstName: false,
            lastName: false,
            department: false,
            position: false,
            hiredDate: false,
            birthDate: false,
        });
        // Save logic here, e.g., send data to server
        console.log('Profile saved:', profile);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfile({ ...profile, profileImage: e.target.result });
            };
            reader.readAsDataURL(file);
        }
        setImageInputKey(Date.now()); // Reset file input
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handlePasswordSubmit = () => {
        // Handle password change logic
        console.log('Password changed:', passwordData);
        setPasswordModalOpened(false);
    };

    return (
        <div className={styles.profileContainer}>
            <h2 className={styles.title}>User Profile</h2>
            <div className={styles.profileHeader}>
                <label htmlFor="profileImageInput" className={styles.profileImageWrapper}>
                    <img
                        src={profile.profileImage}
                        alt="Profile"
                        className={styles.profileImage}
                    />
                    <input
                        type="file"
                        id="profileImageInput"
                        key={imageInputKey} // Reset input on file selection
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </label>
                <div className={styles.profileInfo}>
                    <h3>{profile.firstName} {profile.lastName}</h3>
                    <button
                        className={styles.changePasswordButton}
                        onClick={() => setPasswordModalOpened(true)}
                    >
                        Change Password
                    </button>
                </div>
            </div>
            <div className={styles.profileDetails}>
                <div className={styles.profileRow}>
                    <div className={styles.profileField}>
                        <label>First Name:</label>
                        {editMode.firstName ? (
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                                onBlur={() => setEditMode({ ...editMode, firstName: false })}
                            />
                        ) : (
                            <span onClick={() => handleEdit('firstName')}>{profile.firstName}</span>
                        )}
                    </div>
                    <div className={styles.profileField}>
                        <label>Last Name:</label>
                        {editMode.lastName ? (
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                                onBlur={() => setEditMode({ ...editMode, lastName: false })}
                            />
                        ) : (
                            <span onClick={() => handleEdit('lastName')}>{profile.lastName}</span>
                        )}
                    </div>
                </div>
                <div className={styles.profileRow}>
                    <div className={styles.profileField}>
                        <label>Position:</label>
                        {editMode.position ? (
                            <input
                                type="text"
                                name="position"
                                value={profile.position}
                                onChange={handleChange}
                                onBlur={() => setEditMode({ ...editMode, position: false })}
                            />
                        ) : (
                            <span onClick={() => handleEdit('position')}>{profile.position}</span>
                        )}
                    </div>
                </div>
                <div className={styles.profileRow}>
                    <div className={styles.profileField}>
                        <label>Birth Date:</label>
                        {editMode.birthDate ? (
                            <input
                                type="text"
                                name="birthDate"
                                value={profile.birthDate}
                                onChange={handleChange}
                                onBlur={() => setEditMode({ ...editMode, birthDate: false })}
                            />
                        ) : (
                            <span onClick={() => handleEdit('birthDate')}>{profile.birthDate}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.profileActions}>
                <button className={styles.saveButton} onClick={handleSave}>Save Changes</button>
            </div>

            {/* Change Password Modal */}
            <Modal
                opened={passwordModalOpened}
                onClose={() => setPasswordModalOpened(false)}
                title="Change Password"
                centered
            >
                <div className={styles.modalContent}>
                    <PasswordInput
                        label="Current Password"
                        placeholder="Enter current password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                    />
                    <PasswordInput
                        label="New Password"
                        placeholder="Enter new password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                    />
                    <PasswordInput
                        label="Confirm New Password"
                        placeholder="Confirm new password"
                        name="confirmNewPassword"
                        value={passwordData.confirmNewPassword}
                        onChange={handlePasswordChange}
                    />
                    <Group position="apart" mt="md">
                        <Button variant="outline" onClick={() => setPasswordModalOpened(false)}>Cancel</Button>
                        <Button onClick={handlePasswordSubmit}>Save</Button>
                    </Group>
                </div>
            </Modal>
        </div>
    );
}

export default UserProfile;
