import React, { useState } from 'react'
import { Box, Container, CssBaseline, ThemeProvider, createTheme, Theme } from '@mui/material'
import './App.css'
import { HomeBubbleGraph } from './components/HomeBubbleGraph'
import { ExperienceView } from './views/ExperienceView'
import { EducationView } from './views/EducationView'
import { BackButton } from './components/BackButton'
import { InterestsBubbleGraph } from './components/InterestsBubbleGraph'
import { ProjectsBubbleGraph } from './components/ProjectsBubbleGraph'
import { ActivitiesView } from './views/ActivitiesView'
import { SkillsView } from './views/SkillsView'
import Footer from './components/Footer'

export type View = | 'home' | 'experience' | 'education' | 'interests' | 'projects' | 'activities' | 'skills'

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
                    flexDirection: 'column',
                    background: 'radial-gradient(circle at top, #1f2933 0, #05070b 55%, #020308 100%)',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 3,
                    }}
                >
                    <Container maxWidth='lg' sx={{ position: 'relative', width: '100%', px: {xs: 2, sm: 3} }}>
                        {view === 'home' && (<HomeBubbleGraph onChangeView={setView}/>)}
                        {view !== 'home' && (
                            <Box sx={{ position: 'relative'  }}>
                                <BackButton onClick={goHome}/>
                                {view === 'experience' && <ExperienceView/>}
                                {view === 'education' && <EducationView/>}
                                {view === 'interests' && <InterestsBubbleGraph/>}
                                {view === 'projects' && <ProjectsBubbleGraph/>}
                                {view === 'activities' && <ActivitiesView/>}
                                {view === 'skills' && <SkillsView/>}
                            </Box>
                        )}
                    </Container>
                </Box>
                <Footer/>
            </Box>
        </ThemeProvider>
    )
}

export default App
