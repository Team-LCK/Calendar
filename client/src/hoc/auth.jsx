import React , {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {auth} from '../_actions/user_action';

import { useNavigate } from 'react-router-dom';

export default function(SpecificComponent, option, adminRoute = null){
    function AuthenticationCheck(props){
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response);

                if(!response.payload.isAuth){
                    if(option === true)
                    {
                        navigate('/login')
                    }
                    else {
                        if(adminRoute && !response.payload.isAdmin){
                            navigate('/')
                        }
                        else{
                            if(option === false)
                                navigate('/')
                        }
                    }
                }
            })
        }, [])

        return(
            <SpecificComponent {...props} user={user} />
        );
    }

    return <AuthenticationCheck />
}