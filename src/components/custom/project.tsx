import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Download, ExternalLink, Images, Play, SquareArrowOutUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Card } from '../ui/card'
import { motion } from "motion/react"
import { techUrls } from '../../data.js'

const Project = ({project}) => {
  const [open, setOpen] = useState(false);
  const [dialogImg, setDialogImg] = useState('');

  return (
    <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className='w-full'>
      <Card className='rounded-3xl shadow-xl flex flex-col items-start w-full p-5'>
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
          <DialogContent>
            {/* <DialogHeader>
              <DialogTitle>Image</DialogTitle>
            </DialogHeader> */}
            <div className='flex flex-row justify-center'>
              <img src={dialogImg} className="w-auto h-120 rounded-lg" />
            </div>
          </DialogContent>
        </Dialog>

        <div className='flex flex-row justify-between items-center w-full mb-5'>
          <div className='flex flex-row gap-3'>
            {project.logo && <img src={project.logo} className="w-17 h-17 rounded-2xl" />}
            <div className='flex flex-col justify-center items-start'>
              <p className='text-2xl font-semibold'>{project.name}</p>
              <p className='text-gray-500'>{project.description}</p>
            </div>
          </div>  

          <div className='flex flex-col gap-2 items-center'>
            <p className='font-semibold'>{project.type}</p>
            <Button variant="outline" className='w-full cursor-pointer' onClick={() => window.open(project.url)}>
              <div className='flex flex-row gap-2 items-center'>
                <ExternalLink className="h-6 w-6" />
                <p>Access project</p>
              </div>
            </Button>
          </div>
        </div>

        <div className='flex flex-row w-full gap-5 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-semibold'>Gallery</p>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-130">
              {project.gallery.map((item, index) => (
                <div 
                onClick={() => {
                  if(item.type == 'video') window.open(item.url)
                  else {
                    setDialogImg(item.url)
                    setOpen(true)
                  }
                }}
                key={'img-'+index} 
                className={`flex justify-center rounded-2xl items-center ${item.width} cursor-pointer`}
                style={{ backgroundImage: project.galleryBg.substring(0, 4) === 'http' ? `url(${project.galleryBg})` : undefined, backgroundColor: project.galleryBg.substring(0, 4) === 'http' ? undefined : project.galleryBg }}>
                  {item.type == 'video' ? <div className='relative h-9/10 max-w-9/10'>
                    <img 
                      src={ item.thumb } 
                      className="h-full w-full rounded-lg" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white h-10 w-10" />
                    </div>
                  </div> : 
                  <img 
                    src={item.url} 
                    className="h-9/10 max-w-9/10 backdrop-blur-sm rounded-lg" 
                  />}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-2 flex-grow'>
              <p className='text-xl font-semibold'>About</p>
              <p className='whitespace-pre-line'>{project.about}</p>
            </div>
            <div className='flex flex-col gap-2 flex-grow'>
              <p className='text-xl font-semibold'>Highlights</p>
              <div className='grid grid-cols-3 gap-2'>
                {project.stats.map((stat, index) => 
                <Card key={index} className='flex flex-col justify-center items-center p-5 rounded-2xl'>
                  <p className={'font-semibold text-lg'}>{stat[0]}</p>
                  <p className='text-center'>{stat[1]}</p>
                </Card>)}
              </div>
            </div>
            <div className='flex flex-col gap-2 flex-grow'>
              <p className='text-xl font-semibold'>Technologies</p>
              <div className='grid grid-cols-3 gap-2'>
                {project.technologies.map((tech, index) => (
                  <Button key={index} variant='outline' className='flex flex-row justify-between items-center py-6 px-3 cursor-pointer' onClick={() => window.open(techUrls[tech])}>
                    <div className='flex flex-row gap-2 items-center'>
                      <img src={'/src/assets/' + (project.name=='Power Source' ? 'cube' : tech.toLowerCase()) + '.svg'} className='w-4 h-4 rounded-sm'/>
                      <p className='font-semibold'>{tech}</p>
                    </div>
                    <ExternalLink className="h-4 w-4" />                  
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div> 
      </Card>
    </motion.div>
  )
}

export default Project