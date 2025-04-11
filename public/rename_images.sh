#!/bin/bash

# Script to help rename image files based on visual content

echo "Image Renaming Utility"
echo "======================"

# Function to rename files in a directory
rename_files_in_dir() {
  local dir=$1
  local prefix=$2
  
  # Check if directory exists
  if [ ! -d "$dir" ]; then
    echo "Directory $dir does not exist!"
    return 1
  fi
  
  # Count files for numbering
  local count=1
  
  # Process each file
  for file in "$dir"/*; do
    if [ -f "$file" ]; then
      # Get file extension
      ext="${file##*.}"
      filename="$(basename "$file")"
      
      echo "\n======================"
      echo "File: $filename"
      echo "======================"
      echo "Please view this file in your file manager or image viewer."
      echo "Enter a descriptive name (without extension, use kebab-case):"
      read -p "> " description
      
      if [ -z "$description" ]; then
        echo "Skipping this file..."
        continue
      fi
      
      # Create new filename
      new_name="${prefix}-${description}.${ext}"
      
      # Rename the file
      mv "$file" "$dir/$new_name"
      echo "Renamed to: $new_name"
      
      ((count++))
    fi
  done
}

echo "Choose a directory to process:"
echo "1. Feature images"
echo "2. Logo images"
echo "3. Misc images"
echo "4. All directories"
read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/feature" "feature"
    ;;
  2)
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/logos" "logo"
    ;;
  3)
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/misc" "misc"
    ;;
  4)
    echo "Processing feature images..."
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/feature" "feature"
    
    echo "Processing logo images..."
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/logos" "logo"
    
    echo "Processing misc images..."
    rename_files_in_dir "/home/dislove/文档/HTPA/public/images/misc" "misc"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

echo "\nRenaming complete!"
