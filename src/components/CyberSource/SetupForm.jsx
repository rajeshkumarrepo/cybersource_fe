import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
`;

const SetupForm = ({ info: { jwt, stepup_url, data, error } }) => {
    useEffect(() => {
        const listenEven = event => {
            var returnedPair = !!event && !!event.data && (typeof event.data === 'string') ? event.data.split('?') : null
            if (!!returnedPair && returnedPair.length === 2) {
                const messageSplit = (returnedPair[0]).split('=')
                console.log("messageSplited = = ", messageSplit)
                if (messageSplit[0] === 'fedform-message-for-parent') {
                    console.log("messageSplit ", messageSplit)
                }
            }
        }

        window.addEventListener('message', listenEven)
        return () => {
            window.removeEventListener('message', listenEven)
        }
    }, [])

    useEffect(() => {
        const stepUpForm = document.querySelector('#step-up-form')
        !!stepUpForm && stepUpForm.submit()
    }, [])

    const checkIframeUrl = e => {
        console.log("checkIframeUrl e ", e)
        e.target.contentWindow.postMessage('fedform-message-for-parent=yemessagehai', '*')
        // if(!!e && !!e.target && !!e.target.contentWindow && !!e.target.contentWindow.location) {
        //     console.log(" ***** ", e.target.contentWindow.location.href)
        // }
    }

    useEffect(() => {
        const elem = document.getElementById('stepUpIframe')
        elem.addEventListener('load', function() {
            console.log("LOADED ")
            if(!!elem) {
                elem.contentWindow.postMessage('fedform-message-for-parent=yemessagehai', '*')
            }
        }, false)
    }, [])

    return (
        <Container>
            {!!stepup_url ? <Fragment>
                <iframe name="step-up-iframe" id="stepUpIframe" width="400" onLoad={checkIframeUrl} />
                <form id="step-up-form" target="step-up-iframe" method="post" action={stepup_url}>
                    <input type="hidden" name="JWT" value={jwt} />
                </form>
            </Fragment> : <div class="card-body">
                    <h1>Result</h1>
                    <p className="green">{!!data ? data : 'N/A'}</p>
                    <h1>Error</h1>
                    <p className="red">{!!error ? error : 'N/A'}</p>
                </div>
            }
        </Container >
    )
}

export default SetupForm