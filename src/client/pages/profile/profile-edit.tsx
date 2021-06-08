import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Container, CssBaseline, makeStyles, TextField } from '@material-ui/core';
import { TUpdateUserData, updateAvatar, updateUserData } from '@slices/profile';
import Button from '@material-ui/core/Button';
import { BASE_RESOURCE_URL } from 'client/constants';
import { useDispatch } from 'react-redux';
import { CameraIconStyled, NoAvatar } from './profile.style';
import { useProfile } from './use-profile';
import { withPrivateRoute } from '../../hoc/with-private-route';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatarWrapper: {
        cursor: 'pointer',
        position: 'relative'
    },
    avatar: {
        width: '160px',
        height: '160px',
        borderRadius: '16px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const ProfileEditInner = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { first_name, second_name, display_name, login, email, phone, avatar } = useProfile();
    const [profile, setProfile] = useState({ first_name, second_name, display_name, login, email, phone });

    const avatarFormRef = useRef<HTMLFormElement>(null);
    const avatarInputRef = useRef<HTMLInputElement>(null);

    const handleClickdAvatar = React.useCallback(() => {
        avatarInputRef.current?.click();
    }, []);

    const handleUploadAvatar = React.useCallback(async () => {
        const avatarFormNode = avatarFormRef.current;
        if (!avatarFormNode) return;
        dispatch(updateAvatar(new FormData(avatarFormNode)));
    }, [dispatch]);

    const updateProperty = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newVal = { ...profile };
        // @ts-ignore
        newVal[event.target.name] = event.target.value;
        setProfile(newVal);
    }, [profile]);

    const handleSubmit = React.useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateUserData(profile as TUpdateUserData));
    }, [dispatch, profile]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatarWrapper} onClick={handleClickdAvatar}>
                    {avatar ? (
                        <img src={`${BASE_RESOURCE_URL}${avatar}`} className={classes.avatar} />
                    ) : (
                        <NoAvatar color="primary" fontSize="large" />
                    )}
                    <CameraIconStyled fontSize="large" />
                </div>

                <form ref={avatarFormRef} encType="multipart/form-data">
                    <input type="file" name="avatar" ref={avatarInputRef} hidden accept="image/*" onChange={handleUploadAvatar} />
                </form>

                <form onSubmit={handleSubmit}>
                    <TextField name="first_name" margin="normal" required fullWidth label="Имя" value={profile.first_name} onChange={updateProperty} />
                    <TextField name="second_name" margin="normal" required fullWidth label="Фамилия" value={profile.second_name} onChange={updateProperty} />
                    <TextField name="display_name" margin="normal" required fullWidth label="Никнейм" value={profile.display_name} onChange={updateProperty} />
                    <TextField name="login" margin="normal" required fullWidth label="Логин" value={profile.login} onChange={updateProperty} />
                    <TextField name="email" margin="normal" required fullWidth label="Почта" value={profile.email} onChange={updateProperty} />
                    <TextField name="phone" margin="normal" required fullWidth label="Телефон" value={profile.phone} onChange={updateProperty} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Применить </Button>
                </form>
            </div>
        </Container>
    );
};

export const ProfileEdit = withPrivateRoute(ProfileEditInner);
