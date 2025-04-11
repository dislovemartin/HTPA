#!/usr/bin/env python3

import os
import glob
import shutil
from pathlib import Path

# Base directory - using the actual path
BASE_DIR = "/home/dislove/文档/HTPA/public"

def list_image_files(directory):
    """List all image files in the given directory"""
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.gif']
    files = []
    
    for ext in image_extensions:
        pattern = os.path.join(directory, ext)
        files.extend(glob.glob(pattern))
    
    return sorted(files)

def rename_files_in_directory(directory, prefix):
    """Rename all image files in the directory"""
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist!")
        return
    
    files = list_image_files(directory)
    if not files:
        print(f"No image files found in {directory}")
        return
    
    print(f"\nFound {len(files)} image files in {directory}")
    
    for file_path in files:
        file_name = os.path.basename(file_path)
        ext = os.path.splitext(file_name)[1]
        
        print("\n" + "=" * 40)
        print(f"File: {file_name}")
        print("=" * 40)
        print("Please view this file in your file manager or image viewer.")
        print("Enter a descriptive name (without extension, use kebab-case):")
        description = input("> ")
        
        if not description:
            print("Skipping this file...")
            continue
        
        new_name = f"{prefix}-{description}{ext}"
        new_path = os.path.join(directory, new_name)
        
        # Rename the file
        shutil.move(file_path, new_path)
        print(f"Renamed to: {new_name}")

def main():
    # Check if base directory exists
    if not os.path.exists(BASE_DIR):
        print(f"Base directory {BASE_DIR} does not exist!")
        return
    
    print("Image Renaming Utility")
    print("=" * 22)
    
    # Check what directories exist in the images folder
    images_dir = os.path.join(BASE_DIR, "images")
    if not os.path.exists(images_dir):
        print(f"Images directory {images_dir} does not exist!")
        return
    
    # List all subdirectories in the images directory
    subdirs = [d for d in os.listdir(images_dir) if os.path.isdir(os.path.join(images_dir, d))]
    
    if not subdirs:
        print("No subdirectories found in images directory.")
        # Check for images directly in the images directory
        print("Checking for images directly in the images directory...")
        rename_files_in_directory(images_dir, "image")
        return
    
    print("\nFound the following subdirectories:")
    for i, subdir in enumerate(subdirs, 1):
        print(f"{i}. {subdir}")
    
    print("\nEnter the number of the directory to process (or 'all' for all directories):")
    choice = input("> ")
    
    if choice.lower() == 'all':
        for subdir in subdirs:
            subdir_path = os.path.join(images_dir, subdir)
            print(f"\nProcessing {subdir} directory...")
            rename_files_in_directory(subdir_path, subdir)
    else:
        try:
            idx = int(choice) - 1
            if 0 <= idx < len(subdirs):
                subdir = subdirs[idx]
                subdir_path = os.path.join(images_dir, subdir)
                print(f"\nProcessing {subdir} directory...")
                rename_files_in_directory(subdir_path, subdir)
            else:
                print("Invalid choice!")
        except ValueError:
            print("Invalid input!")
    
    print("\nRenaming complete!")

if __name__ == "__main__":
    main()
