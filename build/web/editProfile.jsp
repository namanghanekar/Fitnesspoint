
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
        
 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Photo Upload</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
        <style>
        :root {
            --primary: #6366f1;
            --primary-light: #818cf8;
            --primary-dark: #4f46e5;
            --success: #10b981;
            --danger: #ef4444;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: #f5f7ff;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 500px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
            overflow: hidden;
            position: relative;
        }

        .header {
            background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
            padding: 30px;
            text-align: center;
            color: white;
            position: relative;
        }

        .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .header p {
            font-size: 14px;
            opacity: 0.9;
        }

        .wave {
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 20px;
        }

        .upload-container {
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .upload-area {
            width: 100%;
            height: 220px;
            border: 2px dashed var(--gray-300);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
        }

        .upload-area:hover {
            border-color: var(--primary);
            background-color: rgba(99, 102, 241, 0.03);
        }

        .upload-area.active {
            border-color: var(--primary);
            background-color: rgba(99, 102, 241, 0.05);
        }

        .upload-icon {
            width: 60px;
            height: 60px;
            background-color: rgba(99, 102, 241, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
        }

        .upload-icon svg {
            width: 30px;
            height: 30px;
            fill: var(--primary);
        }

        .upload-text {
            text-align: center;
            color: var(--gray-600);
        }

        .upload-text h3 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .upload-text p {
            font-size: 13px;
            color: var(--gray-500);
        }

        .upload-text span {
            color: var(--primary);
            font-weight: 500;
        }

        .file-input {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            cursor: pointer;
        }

        .preview-container {
            display: none;
            width: 100%;
            flex-direction: column;
            align-items: center;
        }

        .preview-container.active {
            display: flex;
        }

        .preview-wrapper {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            margin-bottom: 20px;
            border: 3px solid var(--primary);
            box-shadow: 0 5px 15px rgba(99, 102, 241, 0.2);
        }

        .preview-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .preview-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .zoom-control {
            display: flex;
            align-items: center;
            background-color: var(--gray-100);
            border-radius: 20px;
            padding: 5px;
        }

        .zoom-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: none;
            background-color: white;
            color: var(--gray-700);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
        }

        .zoom-btn:hover {
            background-color: var(--primary);
            color: white;
        }

        .zoom-slider {
            width: 100px;
            margin: 0 10px;
            -webkit-appearance: none;
            height: 4px;
            background: var(--gray-300);
            border-radius: 2px;
            outline: none;
        }

        .zoom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
        }

        .rotate-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background-color: white;
            color: var(--gray-700);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
        }

        .rotate-btn:hover {
            background-color: var(--primary);
            color: white;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            width: 100%;
        }

        .btn {
            flex: 1;
            padding: 12px 20px;
            border-radius: 10px;
            border: none;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
        }

        .btn-cancel {
            background-color: var(--gray-100);
            color: var(--gray-700);
        }

        .btn-cancel:hover {
            background-color: var(--gray-200);
        }

        .btn-save {
            background-color: var(--primary);
            color: white;
        }

        .btn-save:hover {
            background-color: var(--primary-dark);
        }

        .btn svg {
            width: 18px;
            height: 18px;
        }

        .upload-progress {
            width: 100%;
            height: 6px;
            background-color: var(--gray-200);
            border-radius: 3px;
            margin-top: 20px;
            overflow: hidden;
            display: none;
        }

        .upload-progress.active {
            display: block;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-light), var(--primary-dark));
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 3px;
        }

        .success-message {
            display: none;
            align-items: center;
            gap: 10px;
            color: var(--success);
            font-weight: 500;
            margin-top: 15px;
        }

        .success-message.active {
            display: flex;
        }

        .success-message svg {
            width: 20px;
            height: 20px;
        }

        .error-message {
            display: none;
            align-items: center;
            gap: 10px;
            color: var(--danger);
            font-weight: 500;
            margin-top: 15px;
        }

        .error-message.active {
            display: flex;
        }

        .error-message svg {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 500px) {
            .container {
                border-radius: 15px;
            }

            .header {
                padding: 20px;
            }

            .upload-container {
                padding: 20px;
            }

            .preview-wrapper {
                width: 150px;
                height: 150px;
            }

            .preview-controls {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
        
        
        
    </head>
    <body>
        <%
    String mail = request.getParameter("mail");
   
    request.setAttribute("mail", mail);
//    out.println(mail);
        %>

<!--        <form action="UploadServlet" method="post" enctype="multipart/form-data">
            <input type="hidden" name="mail" value="<%= mail %>">

            Upload Image: 
            <input type="file" name="image" /><br><br>

            <input type="submit">
        </form>-->
            
            
            
            
            
            
             <div class="container">
        <div class="header">
            <h1>Upload Profile Photo</h1>
            <p>Choose a photo to represent you across the platform</p>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <div class="upload-container">
            <!-- Hidden form that will be submitted to the servlet -->
            <form id="uploadForm" action="UploadServlet" method="post" enctype="multipart/form-data" style="display: none;">
                <input type="file" name="image" id="formFileInput">
                 <input type="hidden" name="mail" value="<%= mail %>">
                <input type="hidden" name="zoom" id="zoomValue">
                <input type="hidden" name="rotation" id="rotationValue">
                <input type="hidden" name="userId" value="123"> <!-- Example user ID -->
            </form>

            <div class="upload-area" id="uploadArea">
                <input type="file" class="file-input" id="fileInput" accept="image/*">
                <div class="upload-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 16L12 8M12 8L8 12M12 8L16 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="upload-text">
                    <h3>Drag & Drop your photo here</h3>
                    <p>or <span>browse files</span> from your computer</p>
                </div>
            </div>

            <div class="preview-container" id="previewContainer">
                <div class="preview-wrapper">
                    <img src="/placeholder.svg" alt="Preview" class="preview-image" id="previewImage">
                </div>

                <div class="preview-controls">
                    <div class="zoom-control">
                        <button type="button" class="zoom-btn" id="zoomOut">-</button>
                        <input type="range" min="1" max="3" step="0.1" value="1" class="zoom-slider" id="zoomSlider">
                        <button type="button" class="zoom-btn" id="zoomIn">+</button>
                    </div>
                    <button type="button" class="rotate-btn" id="rotateBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>

                <div class="action-buttons">
                    <button type="button" class="btn btn-cancel" id="cancelBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                    </button>
                    <button type="button" class="btn btn-save" id="saveBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Save Photo
                    </button>
                </div>
            </div>

            <div class="upload-progress" id="uploadProgress">
                <div class="progress-bar" id="progressBar"></div>
            </div>

            <div class="success-message" id="successMessage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Profile photo updated successfully!
            </div>

            <div class="error-message" id="errorMessage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span id="errorText">Failed to upload photo. Please try again.</span>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const uploadArea = document.getElementById('uploadArea');
            const fileInput = document.getElementById('fileInput');
            const formFileInput = document.getElementById('formFileInput');
            const previewContainer = document.getElementById('previewContainer');
            const previewImage = document.getElementById('previewImage');
            const zoomSlider = document.getElementById('zoomSlider');
            const zoomIn = document.getElementById('zoomIn');
            const zoomOut = document.getElementById('zoomOut');
            const rotateBtn = document.getElementById('rotateBtn');
            const cancelBtn = document.getElementById('cancelBtn');
            const saveBtn = document.getElementById('saveBtn');
            const uploadProgress = document.getElementById('uploadProgress');
            const progressBar = document.getElementById('progressBar');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');
            const errorText = document.getElementById('errorText');
            const uploadForm = document.getElementById('uploadForm');
            const zoomValue = document.getElementById('zoomValue');
            const rotationValue = document.getElementById('rotationValue');

            // Variables
            let currentZoom = 1;
            let currentRotation = 0;
            let selectedFile = null;

            // Event Listeners
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadArea.classList.add('active');
            });

            uploadArea.addEventListener('dragleave', function() {
                uploadArea.classList.remove('active');
            });

            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('active');
                
                if (e.dataTransfer.files.length) {
                    handleFile(e.dataTransfer.files[0]);
                }
            });

            fileInput.addEventListener('change', function() {
                if (fileInput.files.length) {
                    handleFile(fileInput.files[0]);
                }
            });

            zoomSlider.addEventListener('input', function() {
                currentZoom = parseFloat(zoomSlider.value);
                applyTransform();
            });

            zoomIn.addEventListener('click', function() {
                currentZoom = Math.min(currentZoom + 0.1, 3);
                zoomSlider.value = currentZoom;
                applyTransform();
            });

            zoomOut.addEventListener('click', function() {
                currentZoom = Math.max(currentZoom - 0.1, 1);
                zoomSlider.value = currentZoom;
                applyTransform();
            });

            rotateBtn.addEventListener('click', function() {
                currentRotation = (currentRotation + 90) % 360;
                applyTransform();
            });

            cancelBtn.addEventListener('click', function() {
                resetUpload();
            });

            saveBtn.addEventListener('click', function() {
                if (selectedFile) {
                    submitToServlet();
                }
            });

            // Functions
            function handleFile(file) {
                // Check if file is an image
                if (!file.type.match('image.*')) {
                    alert('Please select an image file');
                    return;
                }

                selectedFile = file;
                
                // Create a FileReader to read the image
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    
                    // Reset transform values
                    currentZoom = 1;
                    currentRotation = 0;
                    zoomSlider.value = 1;
                    
                    // Show preview container
                    uploadArea.style.display = 'none';
                    previewContainer.classList.add('active');
                    
                    // Update the form file input
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    formFileInput.files = dataTransfer.files;
                };
                reader.readAsDataURL(file);
            }

            function applyTransform() {
                previewImage.style.transform = `rotate(${currentRotation}deg) scale(${currentZoom})`;
                
                // Update hidden form values
                zoomValue.value = currentZoom;
                rotationValue.value = currentRotation;
            }

            function resetUpload() {
                // Hide preview container
                previewContainer.classList.remove('active');
                uploadArea.style.display = 'flex';
                
                // Reset file inputs
                fileInput.value = '';
                formFileInput.value = '';
                selectedFile = null;
                
                // Reset progress and messages
                uploadProgress.classList.remove('active');
                progressBar.style.width = '0%';
                successMessage.classList.remove('active');
                errorMessage.classList.remove('active');
            }

            function submitToServlet() {
                // Show progress bar
                uploadProgress.classList.add('active');
                successMessage.classList.remove('active');
                errorMessage.classList.remove('active');
                
                // Set the form values
                zoomValue.value = currentZoom;
                rotationValue.value = currentRotation;
                
                // Create FormData object
                const formData = new FormData(uploadForm);
                
                // Use XMLHttpRequest for upload with progress tracking
                const xhr = new XMLHttpRequest();
                
                // Track upload progress
                xhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        const percentComplete = (e.loaded / e.total) * 100;
                        progressBar.style.width = percentComplete + '%';
                    }
                });
                
                // Handle response
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        // Success
                        successMessage.classList.add('active');
                        setTimeout(() => {
                            resetUpload();
                        }, 3000);
                    } else {
                        // Error
                        errorText.textContent = 'Failed to upload photo. Server returned: ' + xhr.statusText;
                        errorMessage.classList.add('active');
                    }
                };
                
                // Handle network errors
                xhr.onerror = function() {
                    errorText.textContent = 'Network error occurred. Please try again.';
                    errorMessage.classList.add('active');
                };
                
                // Open and send the request
                xhr.open('POST', uploadForm.action, true);
                xhr.send(formData);
            }
        });
    </script>
            
    </body>
</html>
