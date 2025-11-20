import React, { useState } from 'react'
import { Box, Container, CssBaseline, ThemeProvider, createTheme, Theme } from '@mui/material'
import './App.css'
import { HomeBubbleGraph } from './components/HomeBubbleGraph'
import { ExperienceView } from './views/ExperienceView'
import { EducationView } from './views/EducationView'
import { BackButton } from './components/BackButton'
import { InterestsBubbleGraph } from './components/InterestsBubbleGraph'
import { ProjectsBubbleGraph } from './components/ProjectsBubbleGraph'
import { ActivitiesView } from "./views/ActivitiesView";

export type View = | 'home' | 'experience' | 'education' | 'interests' | 'projects' | 'activities'

const theme: Theme = createTheme({
    palette: {mode: 'dark', background: {default: '#020617', paper: '#020617'}},
    typography: {fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'].join(',')},
})

function App() {
    const [view, setView] = useState<View>('home')

    const goHome = () => setView('home')

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at top, #1f2933 0, #05070b 55%, #020308 100%)',
                    py: 3
                }}
            >
                <Container maxWidth='lg' sx={{ position: 'relative' }}>
                    {view === 'home' && (<HomeBubbleGraph onChangeView={setView}/>)}
                    {view !== 'home' && (
                        <Box sx={{ position: 'relative' }}>
                            <BackButton onClick={goHome}/>
                            {view === 'experience' && <ExperienceView/>}
                            {view === 'education' && <EducationView/>}
                            {view === 'interests' && <InterestsBubbleGraph onChangeView={setView}/>}
                            {view === 'projects' && <ProjectsBubbleGraph onChangeView={setView}/>}
                            {view === 'activities' && <ActivitiesView/>}
                        </Box>
                    )}
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App
