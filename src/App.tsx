import { useEffect, useState } from 'react'
import { ThemeProvider } from "./components/custom/theme-provider.js"
import photo from '/static/images/photo.jpg' 
import './App.css'
import { Card } from './components/ui/card.js'
import { Button } from './components/ui/button.js'
import { ModeToggle } from './components/custom/mode-toggle.js'
import { GitIcon, LinkedinIcon } from './components/custom/icons.js'
import { ChevronLeft, ChevronRight, FileText, Laptop, Mail } from 'lucide-react'
import { motion } from "motion/react"
import { Projects, projects } from './data.js'
import NavList from './components/custom/navlist'
import Project from './components/custom/project'

function App() {
  const links = {
    'mail': 'mailto:bernardoarodrigues16@gmail.com',
    'linkedin': 'https://linkedin.com/in/bernardoarodrigues',
    'github': 'https://github.com/bernardoarodrigues',
    'resume': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/Resume.pdf?alt=media&token=d4a0a503-2969-4b43-9acb-eac9a252c868'
  }

  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Projects>(projects);

  function preloadImages() {
    projects.forEach(project => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = project.logo;
      document.head.appendChild(link);

      project.gallery.forEach(item => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = item.thumb ? item.thumb : item.url;
        document.head.appendChild(link);
      })
    })
  }

  useEffect(() => {
    preloadImages()
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex flex-col justify-start items-center py-5 w-full'>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='w-[65vw]'>
          <Card className='rounded-3xl shadow-xl w-full'>
            <div className='flex flex-row justify-between items-center p-5'>
              <div className='flex flex-row justify-between gap-5'>
                <img src={photo} alt="Profile" className="w-20 h-20 rounded-full" />
                
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-2xl font-semibold'>Bernardo Rodrigues</p>
                  <p className='text-zinc-500'>Computer Science • University of Kentucky</p>
                  <p className='text-zinc-500'>19 years old • Lexington/KY</p>
                </div>
              </div>
              <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => window.open(links.mail)}>
                    <Mail className="h-6 w-6" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full p-2 cursor-pointer" onClick={() => window.open(links.linkedin)}>
                    <LinkedinIcon />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => window.open(links.github)}>
                    <GitIcon />
                  </Button>
                  <ModeToggle />
                </div>
                <Button variant='outline' size='default' className='rounded-2xl cursor-pointer' onClick={() => window.open(links.resume)}>
                  <FileText className="h-6 w-6" />
                  <p>View Resume</p>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='flex flex-row gap-5 items-center pt-7 w-[95vw]'>
          <Button variant='outline' size='default' className='rounded-full px-2 py-7 cursor-pointer' onClick={() => {
            if(currentProject > 0) setCurrentProject(currentProject - 1)
            else setCurrentProject(filteredProjects.length - 1)
          }}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className='flex flex-col flex-grow pb-5'>
            <div 
            className='flex flex-row gap-2 items-center justify-center mb-3'>
              <Laptop className="h-8 w-8" />
              <p className='text-2xl font-semibold'>Projects</p>
            </div>

            <NavList currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} currentProject={currentProject} setCurrentProject={setCurrentProject} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects}/>

            {filteredProjects && <Project key={filteredProjects[currentProject].id} project={filteredProjects[currentProject]} />}
          </div>

          <Button variant='outline' size='default' className='rounded-full px-2 py-7 cursor-pointer' onClick={() => {
            if(currentProject < filteredProjects.length - 1) setCurrentProject(currentProject + 1)
            else setCurrentProject(0)
          }}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </ThemeProvider>
  )
}

export default App
