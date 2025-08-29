"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField,
  Chip,
  Tabs,
  Tab,
  InputAdornment,
  Avatar,
  Tooltip,
  Fade
} from '@mui/material';
import { 
  Search as SearchIcon,
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  Create as CreateIcon,
  AutoAwesome as AutoAwesomeIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon
} from '@mui/icons-material';
import Topbar from "@/app/components/dashboardTopbar/topbar";
import Text from "@/app/components/text";

interface IconData {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  isFavorite: boolean;
  isPremium: boolean;
  downloadCount: number;
  rating: number;
  color: string;
  size: 'small' | 'medium' | 'large';
}

// Mock icon data - replace with your actual icons
const mockIcons: IconData[] = [
  {
    id: '1',
    name: 'Digital Signature',
    category: 'Signature',
    icon: <CreateIcon sx={{ fontSize: 48, color: 'var(--secondary-color)' }} />,
    description: 'Professional digital signature icon for documents and contracts',
    tags: ['signature', 'digital', 'document', 'legal'],
    isFavorite: false,
    isPremium: false,
    downloadCount: 1250,
    rating: 4.8,
    color: 'var(--secondary-color)',
    size: 'medium'
  },
  {
    id: '2',
    name: 'Brush Signature',
    category: 'Signature',
    icon: <BrushIcon sx={{ fontSize: 48, color: '#FF6B6B' }} />,
    description: 'Hand-drawn brush style signature with artistic flair',
    tags: ['signature', 'brush', 'artistic', 'hand-drawn'],
    isFavorite: true,
    isPremium: true,
    downloadCount: 890,
    rating: 4.9,
    color: '#FF6B6B',
    size: 'large'
  },
  {
    id: '3',
    name: 'Elegant Signature',
    category: 'Signature',
    icon: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#4ECDC4' }} />,
    description: 'Elegant and sophisticated signature design',
    tags: ['signature', 'elegant', 'sophisticated', 'premium'],
    isFavorite: false,
    isPremium: true,
    downloadCount: 2100,
    rating: 5.0,
    color: '#4ECDC4',
    size: 'large'
  },
  {
    id: '4',
    name: 'Simple Initials',
    category: 'Initials',
    icon: <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: '#45B7D1' }}>JD</Typography>,
    description: 'Clean and simple initials design',
    tags: ['initials', 'simple', 'clean', 'minimal'],
    isFavorite: false,
    isPremium: false,
    downloadCount: 567,
    rating: 4.5,
    color: '#45B7D1',
    size: 'small'
  },
  {
    id: '5',
    name: 'Calligraphy Style',
    category: 'Signature',
    icon: <Typography sx={{ fontSize: 48, fontFamily: 'Great Vibes, cursive', color: '#96CEB4' }}>JS</Typography>,
    description: 'Beautiful calligraphy style signature',
    tags: ['signature', 'calligraphy', 'elegant', 'stylish'],
    isFavorite: true,
    isPremium: false,
    downloadCount: 1340,
    rating: 4.7,
    color: '#96CEB4',
    size: 'medium'
  },
  {
    id: '6',
    name: 'Modern Initials',
    category: 'Initials',
    icon: <Typography sx={{ fontSize: 48, fontWeight: 900, color: '#FFEAA7' }}>MK</Typography>,
    description: 'Modern and bold initials design',
    tags: ['initials', 'modern', 'bold', 'contemporary'],
    isFavorite: false,
    isPremium: true,
    downloadCount: 890,
    rating: 4.6,
    color: '#FFEAA7',
    size: 'medium'
  },
  {
    id: '7',
    name: 'Classic Signature',
    category: 'Signature',
    icon: <Typography sx={{ fontSize: 48, fontFamily: 'Alex Brush, cursive', color: '#DDA0DD' }}>John Doe</Typography>,
    description: 'Classic handwritten signature style',
    tags: ['signature', 'classic', 'handwritten', 'traditional'],
    isFavorite: false,
    isPremium: false,
    downloadCount: 2100,
    rating: 4.8,
    color: '#DDA0DD',
    size: 'large'
  },
  {
    id: '8',
    name: 'Minimal Initials',
    category: 'Initials',
    icon: <Typography sx={{ fontSize: 48, fontWeight: 300, color: '#F8BBD9' }}>AB</Typography>,
    description: 'Minimal and clean initials design',
    tags: ['initials', 'minimal', 'clean', 'simple'],
    isFavorite: true,
    isPremium: false,
    downloadCount: 756,
    rating: 4.4,
    color: '#F8BBD9',
    size: 'small'
  }
];

const categories = ['All', 'Signature', 'Initials', 'Premium', 'Favorites'];

export default function IconsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'downloads'>('name');

  const filteredIcons = mockIcons.filter(icon => {
    const matchesCategory = selectedCategory === 'All' || 
      (selectedCategory === 'Premium' && icon.isPremium) ||
      (selectedCategory === 'Favorites' && favorites.includes(icon.id)) ||
      icon.category === selectedCategory;
    
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedIcons = [...filteredIcons].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloadCount - a.downloadCount;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleIconClick = (icon: IconData) => {
    setSelectedIcon(icon);
    setShowDialog(true);
  };

  const handleFavoriteToggle = (iconId: string) => {
    setFavorites(prev => 
      prev.includes(iconId) 
        ? prev.filter(id => id !== iconId)
        : [...prev, iconId]
    );
  };

  const handleDownload = (icon: IconData) => {
    // Implement download functionality
    console.log('Downloading:', icon.name);
    // You can trigger a download here or open a download dialog
  };

  const handleShare = (icon: IconData) => {
    // Implement share functionality
    console.log('Sharing:', icon.name);
    // You can open a share dialog or copy link to clipboard
  };

  const handleEdit = (icon: IconData) => {
    // Implement edit functionality
    console.log('Editing:', icon.name);
    // You can open an editor or redirect to edit page
  };

  return (
    <Topbar title="Icons Library" buttonText="Create New" secondText="Import Icons" outlinedBtn="Export All">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="700" color="rgb(0 8 61)" mb={2}>
            Icon Library
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Discover and customize beautiful icons for your electronic signatures. Choose from our curated collection or create your own.
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search icons by name, tags, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f8f9fa',
                    '&:hover': {
                      backgroundColor: '#e9ecef',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                      boxShadow: '0 0 0 2px var(--secondary-color)',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <TextField
                  select
                  label="Sort by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                  <option value="downloads">Downloads</option>
                </TextField>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'var(--secondary-color)',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'var(--secondary-color)',
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Icons Grid */}
        <Grid container spacing={3}>
          {sortedIcons.map((icon) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={icon.id}>
              <Fade in timeout={500}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e0e0e0',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      borderColor: 'var(--secondary-color)',
                    },
                    position: 'relative',
                    overflow: 'visible',
                  }}
                  onClick={() => handleIconClick(icon)}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    {/* Premium Badge */}
                    {icon.isPremium && (
                      <Chip
                        label="Premium"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: 10,
                          backgroundColor: '#FFD700',
                          color: '#000',
                          fontWeight: 'bold',
                          fontSize: '0.75rem',
                        }}
                      />
                    )}

                    {/* Icon Display */}
                    <Box sx={{ mb: 2, minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icon.icon}
                    </Box>

                    {/* Icon Info */}
                    <Typography variant="h6" fontWeight="600" color="rgb(0 8 61)" mb={1} noWrap>
                      {icon.name}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" mb={2} sx={{ minHeight: 40 }}>
                      {icon.description}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2, justifyContent: 'center' }}>
                      {icon.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(25, 118, 210, 0.08)',
                            color: 'rgb(0 8 61)',
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Stats and Actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarIcon sx={{ fontSize: 16, color: '#FFD700' }} />
                        <Typography variant="caption" color="text.secondary">
                          {icon.rating}
                        </Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {icon.downloadCount} downloads
                      </Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteToggle(icon.id);
                        }}
                        sx={{
                          color: favorites.includes(icon.id) ? '#ff4081' : 'text.secondary',
                          '&:hover': { color: '#ff4081' },
                        }}
                      >
                        {favorites.includes(icon.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>

                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <Tooltip title="Download">
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(icon);
                            }}
                            sx={{ color: 'var(--secondary-color)' }}
                          >
                            <DownloadIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(icon);
                            }}
                            sx={{ color: 'var(--secondary-color)' }}
                          >
                            <ShareIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(icon);
                            }}
                            sx={{ color: 'var(--secondary-color)' }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {sortedIcons.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary" mb={2}>
              No icons found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        )}

        {/* Icon Details Dialog */}
        <Dialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '16px',
              overflow: 'visible',
            },
          }}
        >
          {selectedIcon && (
            <>
              <DialogTitle sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid #e0e0e0',
                pb: 2,
                bgcolor: 'rgb(0 8 61)',
                color: 'white'
              }}>
                <Typography variant="h5" fontWeight="600">
                  {selectedIcon.name}
                </Typography>
                <IconButton onClick={() => setShowDialog(false)} sx={{ color: 'white' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  {/* Icon Preview */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      p: 4,
                      border: '2px dashed #e0e0e0',
                      borderRadius: '16px',
                      backgroundColor: '#fafafa'
                    }}>
                      <Box sx={{ mb: 3 }}>
                        {selectedIcon.icon}
                      </Box>
                      <Typography variant="h6" color="text.secondary" textAlign="center">
                        Icon Preview
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Icon Details */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" fontWeight="600" color="rgb(0 8 61)" mb={2}>
                        Details
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={3}>
                        {selectedIcon.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {selectedIcon.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(25, 118, 210, 0.08)',
                              color: 'rgb(0 8 61)',
                            }}
                          />
                        ))}
                      </Box>

                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="text.secondary">Category</Typography>
                          <Typography variant="body2" fontWeight="600">{selectedIcon.category}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="text.secondary">Size</Typography>
                          <Typography variant="body2" fontWeight="600" sx={{ textTransform: 'capitalize' }}>
                            {selectedIcon.size}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="text.secondary">Downloads</Typography>
                          <Typography variant="body2" fontWeight="600">{selectedIcon.downloadCount}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="text.secondary">Rating</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <StarIcon sx={{ fontSize: 16, color: '#FFD700' }} />
                            <Typography variant="body2" fontWeight="600">{selectedIcon.rating}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>

              <DialogActions sx={{ p: 3, borderTop: '1px solid #e0e0e0' }}>
                <Button
                  onClick={() => setShowDialog(false)}
                  sx={{ color: 'text.secondary' }}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(selectedIcon)}
                  sx={{ 
                    borderColor: 'var(--secondary-color)', 
                    color: 'var(--secondary-color)',
                    '&:hover': { borderColor: 'var(--secondary-color)' }
                  }}
                >
                  Edit Icon
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={() => handleDownload(selectedIcon)}
                  sx={{ 
                    backgroundColor: 'var(--secondary-color)',
                    '&:hover': { backgroundColor: 'var(--secondary-color)' }
                  }}
                >
                  Download
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </Topbar>
  );
}

