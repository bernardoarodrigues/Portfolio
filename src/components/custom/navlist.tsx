import React from 'react'
import { motion } from "motion/react"
import { Card } from '../ui/card.js'
import { projects } from '../../data.js'
import { Button } from '../ui/button.js'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronLeft, ChevronRight, ListFilter } from 'lucide-react'

const categories = ['All', 'Web', 'Mobile', 'AI', 'Electronics']

interface NavListProps {
  currentCategory: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
  currentProject: number;
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>;
  filteredProjects: Array<{
    logo: string;
    name: string;
    categories: string[];
  }>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<typeof projects>>;
}

const NavList: React.FC<NavListProps> = ({
  currentCategory,
  setCurrentCategory,
  currentProject,
  setCurrentProject,
  filteredProjects,
  setFilteredProjects
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = React.useState<boolean>(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScroll(scrollWidth > clientWidth)
    }
  }

  // Check on mount and when projects change
  React.useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [filteredProjects])

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className='w-full'>
      <Card className='rounded-3xl flex flex-row w-full mb-3 items-center px-3'>
        {canScroll && (
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full mr-3"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className='flex flex-row items-center gap-2 overflow-x-auto w-full scrollbar-hide py-5 whitespace-nowrap'
        >
          {filteredProjects.map((project, index) => (
            <Button variant='outline' key={index} className={`flex-shrink-0 rounded-2xl px-3 py-5 cursor-pointer ${currentProject === index ? 'bg-secondary' : undefined}`} onClick={() => setCurrentProject(index)}>
              <div className='flex flex-row gap-2 items-center'>
                <img src={project.logo} className="w-6 h-6 rounded-lg" />
                <p className='text-sm font-semibold'>{project.name}</p>
              </div>
            </Button>
          ))}
        </div>

        {canScroll && (
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full mx-3"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger>
          <Button variant={'outline'} className={'rounded-2xl cursor-pointer py-5 flex flex-row gap-3 justify-center items-center'}>
            <ListFilter className='h-5 w-5' />
            <p className='text-sm font-semibold'>{categories[currentCategory]}</p>
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <p className='text-center'>Categories</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category, index) => (
              <DropdownMenuItem key={index} onClick={() => {
                setCurrentProject(0)
                setCurrentCategory(index)
                setFilteredProjects(projects.filter(project => categories[index] === 'All' ? true : project.categories.includes(categories[index])))
              }} className={currentCategory == index ? 'bg-secondary' : undefined}>
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </Card>
    </motion.div>
  )
}

export default NavList